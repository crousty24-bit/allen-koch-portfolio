import { type ReactNode, useState } from 'react'
import type { Language } from '../../data/i18n/i18n'
import {
  type SkillTreeIcon,
  type SkillTreeNode,
  skillsTree,
} from '../../data/skills/skills'

type SkillsTreeProps = {
  language: Language
}

type SkillsTreeNodeProps = {
  expandedIds: Set<string>
  isLast?: boolean
  language: Language
  node: SkillTreeNode
  onToggle: (nodeId: string) => void
}

export function SkillsTree({ language }: SkillsTreeProps) {
  const [expandedIds, setExpandedIds] = useState(
    () => new Set<string>([skillsTree.id]),
  )

  const toggleNode = (nodeId: string) => {
    setExpandedIds((currentIds) => {
      const nextIds = new Set(currentIds)

      if (nextIds.has(nodeId)) {
        nextIds.delete(nodeId)
      } else {
        nextIds.add(nodeId)
      }

      return nextIds
    })
  }

  return (
    <div className="skills-tree reveal">
      <ul className="skills-tree__list skills-tree__list--root">
        <SkillsTreeNode
          expandedIds={expandedIds}
          isLast
          language={language}
          node={skillsTree}
          onToggle={toggleNode}
        />
      </ul>
    </div>
  )
}

function SkillsTreeNode({
  expandedIds,
  isLast = false,
  language,
  node,
  onToggle,
}: SkillsTreeNodeProps) {
  const contentId = `skills-tree-${node.id}-content`
  const children = node.children ?? []
  const keywords = node.keywords?.[language] ?? []
  const hasContent = children.length > 0 || keywords.length > 0
  const isExpanded = expandedIds.has(node.id)

  return (
    <li
      className={`skills-tree__node${isLast ? ' skills-tree__node--last' : ''}`}
    >
      <button
        aria-controls={contentId}
        aria-expanded={isExpanded}
        className="skills-tree__trigger"
        onClick={() => onToggle(node.id)}
        type="button"
      >
        <span aria-hidden="true" className="skills-tree__chevron" />
        <SkillsTreeIconGraphic icon={node.icon} />
        <span className="skills-tree__label">{node.label[language]}</span>
      </button>

      {hasContent ? (
        <div
          className="skills-tree__content"
          hidden={!isExpanded}
          id={contentId}
        >
          {children.length > 0 ? (
            <ul className="skills-tree__list skills-tree__list--children">
              {children.map((child, index) => (
                <SkillsTreeNode
                  expandedIds={expandedIds}
                  isLast={index === children.length - 1}
                  key={child.id}
                  language={language}
                  node={child}
                  onToggle={onToggle}
                />
              ))}
            </ul>
          ) : null}

          {keywords.length > 0 ? (
            <p className="skills-tree__keywords">
              <span className="visually-hidden">{node.label[language]}: </span>
              {keywords.join(' · ')}
            </p>
          ) : null}
        </div>
      ) : null}
    </li>
  )
}

type SkillsTreeIconGraphicProps = {
  icon?: SkillTreeIcon
}

function SkillsTreeIconGraphic({ icon }: SkillsTreeIconGraphicProps) {
  if (!icon) {
    return <span aria-hidden="true" className="skills-tree__folder" />
  }

  return (
    <span
      aria-hidden="true"
      className={`skills-tree__icon skills-tree__icon--${icon}`}
    >
      <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
        {skillsTreeIconPaths[icon]}
      </svg>
    </span>
  )
}

const skillsTreeIconPaths: Record<SkillTreeIcon, ReactNode> = {
  engineering: (
    <>
      <path d="m6.2 7.6-2-2 1.5-1.5 2 2" />
      <path d="m8 6 6.5 6.5a2 2 0 1 1-2.8 2.8L5.2 8.8" />
      <path d="M12.2 5.2a3.1 3.1 0 0 0 3.5 4.3l-2.1-2.1 1.7-1.7 2.1 2.1a3.1 3.1 0 0 0-4.3-3.5L7 10.4" />
    </>
  ),
  terminal: (
    <>
      <rect height="12" rx="2" width="15" x="2.5" y="4" />
      <path d="m5.5 8 2.4 2-2.4 2" />
      <path d="M9.8 12h4.4" />
    </>
  ),
  'code-quality': (
    <>
      <path d="m6.7 6.2-3 3.8 3 3.8" />
      <path d="m13.3 6.2 3 3.8-3 3.8" />
      <path d="m8.8 13.1 1.3 1.3 3.5-4.4" />
    </>
  ),
  product: (
    <>
      <path d="M4 6.2 10 3l6 3.2v7.6L10 17l-6-3.2z" />
      <path d="m4.2 6.4 5.8 3.1 5.8-3.1" />
      <path d="M10 9.5V17" />
    </>
  ),
  'product-mindset': (
    <>
      <circle cx="10" cy="10" r="6.5" />
      <circle cx="10" cy="10" r="3.3" />
      <path d="m10 10 5.8-5.8" />
      <path d="M13.6 4.2h2.2v2.2" />
    </>
  ),
  delivery: (
    <>
      <path d="M11.2 4.1c2.1-.7 3.9-.7 4.7-.4.3.8.3 2.6-.4 4.7-1 2.8-3.5 5-5.8 6.6L5 10.3c1.6-2.3 3.8-4.8 6.2-6.2Z" />
      <path d="M7.1 12.2 4.4 13l.8-2.7" />
      <path d="M9.7 14.8 8.9 17l2.7-.8" />
      <circle cx="12.7" cy="7.3" r="1.2" />
    </>
  ),
  teamwork: (
    <>
      <circle cx="6.3" cy="8" r="2.1" />
      <circle cx="13.7" cy="8" r="2.1" />
      <path d="M2.9 15c.5-2 1.8-3 3.4-3 1.1 0 2 .5 2.7 1.4" />
      <path d="M11 13.4c.7-.9 1.6-1.4 2.7-1.4 1.6 0 2.9 1 3.4 3" />
      <path d="M8.2 15h3.6" />
    </>
  ),
  'ai-workflow': (
    <>
      <path d="m10 2.9.9 3.2 3.2.9-3.2.9L10 11l-.9-3.1L5.9 7l3.2-.9z" />
      <path d="m15.2 11 .5 1.8 1.8.5-1.8.5-.5 1.8-.5-1.8-1.8-.5 1.8-.5z" />
      <path d="M4.6 11.7v2.1c0 1 .8 1.8 1.8 1.8h4.2" />
      <path d="m9.1 13.9 1.5 1.7-1.5 1.5" />
    </>
  ),
  collaboration: (
    <>
      <path d="M4.1 5.2h11.8c.9 0 1.6.7 1.6 1.6v5c0 .9-.7 1.6-1.6 1.6H9.5L6 16v-2.6H4.1c-.9 0-1.6-.7-1.6-1.6v-5c0-.9.7-1.6 1.6-1.6Z" />
      <path d="M6.3 8.2h7.4" />
      <path d="M6.3 10.5h5.1" />
    </>
  ),
}
