const data = [
  {
    id: 1,
    title: '菜单 1',
    link: '#',
    children: [
      {
        id: 11,
        title: '子菜单 1-1',
        link: '#',
        children: [
          {
            id: 111,
            title: '子菜单 1-1-1',
            link: '#'
          },
          {
            id: 112,
            title: '子菜单 1-1-2',
            link: '#'
          }
        ]
      },
      {
        id: 12,
        title: '子菜单 1-2',
        link: '#'
      }
    ]
  },
  {
    id: 2,
    title: '菜单 2',
    link: '#',
    children: [
      {
        id: 21,
        title: '子菜单 2-1',
        link: '#'
      },
      {
        id: 22,
        title: '子菜单 2-2',
        link: '#'
      }
    ]
  }
]

function MenuItem({ item }) {
  const hasChildren = item.children && item.children.length > 0

  return (
    <li>
      <a href={item.link}>{item.title}</a>
      {hasChildren && (
        <ul>
          {item.children.map(child => (
            <MenuItem key={child.id} item={child} />
          ))}
        </ul>
      )}
    </li>
  )
}

export default function Sidebar() {
  return (
    <aside>
      <ul>
        {data.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </aside>
  )
}
