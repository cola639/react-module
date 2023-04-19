import { FC, useState } from 'react'
import { useThemeWatcher } from './hooks/useThemeWatcher'

// Component
import AppSidebar from '@/pages/sidebar'
import DocS from '@/pages/search/docSearch'

import 'normalize.css'
import './styles/index.scss'

import { Button, ButtonGroup, Box } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'

const useStyles = makeStyles(theme =>
  createStyles({
    content: {
      margin: '100px 0'
    },

    wrap: {
      padding: '5vw'
    }
  })
)

export interface IAppProps {}

const App: FC<IAppProps> = () => {
  useThemeWatcher()
  const classes = useStyles()
  const [view, setView] = useState('sidebar')

  const changeView = (id: string) => {
    console.log('id', id)
    setView(id)
  }

  return (
    <>
      <Box className={`flex-center ${classes.content}`}>
        <ButtonGroup variant="contained" color="primary">
          <Button onClick={() => changeView('sidebar')}>sidebar</Button>
          <Button onClick={() => changeView('other')}>other</Button>
          <Button onClick={() => changeView('docSearch')}>docSearch</Button>
        </ButtonGroup>
      </Box>
      <Box className={classes.wrap}>
        {view === 'sidebar' && <AppSidebar />}
        {view === 'search' && <></>}
        {view === 'docSearch' && <DocS></DocS>}
      </Box>
    </>
  )
}

export default App
