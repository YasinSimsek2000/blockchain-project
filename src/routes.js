import React from 'react'

const Blockchain = React.lazy(() => import('./views/Blockchain'))
const Solana = React.lazy(() => import('./views/Solana'))

const Milestones = React.lazy(() => import('./views/Milestones'))
const Team = React.lazy(() => import('./views/Team'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/blockchain', name: 'Blockchain', element: Blockchain },
  { path: '/solana', name: 'Solana', element: Solana },
  { path: '/milestones', name: 'Milestones', element: Milestones },
  { path: '/team', name: 'Team', element: Team },
]

export default routes
