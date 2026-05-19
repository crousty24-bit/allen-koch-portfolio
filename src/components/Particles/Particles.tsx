import { Camera, Geometry, Mesh, Program, Renderer } from 'ogl'
import { useEffect, useRef } from 'react'
import './Particles.css'

const defaultColors = ['#ffffff', '#ffffff', '#ffffff']

type MousePosition = {
  x: number
  y: number
}

type Uniform<T> = {
  value: T
}

type ParticleProgram = Program & {
  uniforms: {
    uTime: Uniform<number>
    uSpread: Uniform<number>
    uBaseSize: Uniform<number>
    uSizeRandomness: Uniform<number>
    uAlphaParticles: Uniform<number>
  }
}

export type ParticlesProps = {
  particleCount?: number
  particleSpread?: number
  speed?: number
  particleColors?: string[]
  moveParticlesOnHover?: boolean
  particleHoverFactor?: number
  alphaParticles?: boolean
  particleBaseSize?: number
  sizeRandomness?: number
  cameraDistance?: number
  disableRotation?: boolean
  pixelRatio?: number
  className?: string
}

const hexToRgb = (hexColor: string): [number, number, number] => {
  let hex = hexColor.replace(/^#/, '')

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((character) => character + character)
      .join('')
  }

  const int = Number.parseInt(hex, 16)
  const red = ((int >> 16) & 255) / 255
  const green = ((int >> 8) & 255) / 255
  const blue = (int & 255) / 255

  return [red, green, blue]
}

const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;

  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;

  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vRandom = random;
    vColor = color;

    vec3 pos = position * uSpread;
    pos.z *= 10.0;

    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);

    vec4 mvPos = viewMatrix * mPos;

    if (uSizeRandomness == 0.0) {
      gl_PointSize = uBaseSize;
    } else {
      gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
    }

    gl_Position = projectionMatrix * mvPos;
  }
`

const fragment = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform float uAlphaParticles;
  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));

    if(uAlphaParticles < 0.5) {
      if(d > 0.5) {
        discard;
      }
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
    } else {
      float circle = smoothstep(0.5, 0.4, d) * 0.8;
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), circle);
    }
  }
`

const getPrefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function Particles({
  particleCount = 200,
  particleSpread = 10,
  speed = 0.1,
  particleColors,
  moveParticlesOnHover = false,
  particleHoverFactor = 1,
  alphaParticles = false,
  particleBaseSize = 100,
  sizeRandomness = 1,
  cameraDistance = 20,
  disableRotation = false,
  pixelRatio = 1,
  className = '',
}: ParticlesProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mouseRef = useRef<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    if (getPrefersReducedMotion()) {
      return undefined
    }

    const container = containerRef.current

    if (!container) {
      return undefined
    }

    let renderer: Renderer

    try {
      renderer = new Renderer({
        alpha: true,
        depth: false,
        dpr: pixelRatio,
      })
    } catch {
      return undefined
    }

    const gl = renderer.gl

    container.appendChild(gl.canvas)
    gl.clearColor(0, 0, 0, 0)

    const camera = new Camera(gl, { fov: 15 })
    camera.position.set(0, 0, cameraDistance)

    const resize = () => {
      const width = container.clientWidth
      const height = container.clientHeight

      renderer.setSize(width, height)
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height })
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1)

      mouseRef.current = { x, y }
    }

    window.addEventListener('resize', resize, false)
    resize()

    if (moveParticlesOnHover) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    const positions = new Float32Array(particleCount * 3)
    const randoms = new Float32Array(particleCount * 4)
    const colors = new Float32Array(particleCount * 3)
    const palette =
      particleColors && particleColors.length > 0
        ? particleColors
        : defaultColors

    for (let index = 0; index < particleCount; index += 1) {
      let x: number
      let y: number
      let z: number
      let distanceSquared: number

      do {
        x = Math.random() * 2 - 1
        y = Math.random() * 2 - 1
        z = Math.random() * 2 - 1
        distanceSquared = x * x + y * y + z * z
      } while (distanceSquared > 1 || distanceSquared === 0)

      const radius = Math.cbrt(Math.random())
      const color = hexToRgb(
        palette[Math.floor(Math.random() * palette.length)],
      )

      positions.set([x * radius, y * radius, z * radius], index * 3)
      randoms.set(
        [Math.random(), Math.random(), Math.random(), Math.random()],
        index * 4,
      )
      colors.set(color, index * 3)
    }

    const geometry = new Geometry(gl, {
      color: { data: colors, size: 3 },
      position: { data: positions, size: 3 },
      random: { data: randoms, size: 4 },
    })

    const program = new Program(gl, {
      depthTest: false,
      fragment,
      transparent: true,
      uniforms: {
        uAlphaParticles: { value: alphaParticles ? 1 : 0 },
        uBaseSize: { value: particleBaseSize * pixelRatio },
        uSizeRandomness: { value: sizeRandomness },
        uSpread: { value: particleSpread },
        uTime: { value: 0 },
      },
      vertex,
    }) as ParticleProgram

    const particles = new Mesh(gl, {
      geometry,
      mode: gl.POINTS,
      program,
    })

    let animationFrameId = 0
    let lastTime = performance.now()
    let elapsed = 0

    const update = (time: number) => {
      animationFrameId = requestAnimationFrame(update)
      const delta = time - lastTime
      lastTime = time
      elapsed += delta * speed

      program.uniforms.uTime.value = elapsed * 0.001

      if (moveParticlesOnHover) {
        particles.position.x = -mouseRef.current.x * particleHoverFactor
        particles.position.y = -mouseRef.current.y * particleHoverFactor
      } else {
        particles.position.x = 0
        particles.position.y = 0
      }

      if (!disableRotation) {
        particles.rotation.x = Math.sin(elapsed * 0.0002) * 0.1
        particles.rotation.y = Math.cos(elapsed * 0.0005) * 0.15
        particles.rotation.z += 0.01 * speed
      }

      renderer.render({ camera, scene: particles })
    }

    animationFrameId = requestAnimationFrame(update)

    return () => {
      window.removeEventListener('resize', resize)

      if (moveParticlesOnHover) {
        window.removeEventListener('mousemove', handleMouseMove)
      }

      cancelAnimationFrame(animationFrameId)

      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas)
      }
    }
  }, [
    alphaParticles,
    cameraDistance,
    disableRotation,
    moveParticlesOnHover,
    particleBaseSize,
    particleColors,
    particleCount,
    particleHoverFactor,
    particleSpread,
    pixelRatio,
    sizeRandomness,
    speed,
  ])

  return (
    <div className={`particles-container ${className}`} ref={containerRef} />
  )
}
