import { Home } from '@/components'

export default function HomeContainer() {
  // __RENDER
  return (
    <div className='ui--home router-view'>
      <Home.Cover />
      <Home.Collect />
      <Home.Experience />
      <Home.Skill />
    </div>
  )
}
