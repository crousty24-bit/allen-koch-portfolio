import { useState } from 'react'
import type { Language } from '../../data/i18n/i18n'
import { type SkillTreeNode, skillsTree } from '../../data/skills/skills'

type SkillsTreeProps = {
  language: Language
}

type SkillsTreeNodeProps = {
  depth: number
  expandedIds: Set<string>
  index: number
  language: Language
  node: SkillTreeNode
  onToggle: (nodeId: string) => void
}

const formatIndex = (value: number) => String(value).padStart(2, '0')

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
          depth={0}
          expandedIds={expandedIds}
          index={0}
          language={language}
          node={skillsTree}
          onToggle={toggleNode}
        />
      </ul>
    </div>
  )
}

function SkillsTreeNode({
  depth,
  expandedIds,
  index,
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
    <li className={`skills-tree__node skills-tree__node--depth-${depth}`}>
      <button
        aria-controls={contentId}
        aria-expanded={isExpanded}
        className="skills-tree__trigger"
        onClick={() => onToggle(node.id)}
        type="button"
      >
        {depth > 0 ? (
          <span aria-hidden="true" className="skills-tree__index">
            {formatIndex(index + 1)}
          </span>
        ) : null}
        <span className="skills-tree__label">{node.label[language]}</span>
        <span aria-hidden="true" className="skills-tree__sign">
          {isExpanded ? '−' : '+'}
        </span>
      </button>

      {hasContent ? (
        <div
          className="skills-tree__content"
          hidden={!isExpanded}
          id={contentId}
        >
          {children.length > 0 ? (
            <ul className="skills-tree__list skills-tree__list--children">
              {children.map((child, childIndex) => (
                <SkillsTreeNode
                  depth={depth + 1}
                  expandedIds={expandedIds}
                  index={childIndex}
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
