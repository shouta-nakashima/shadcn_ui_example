import NotesList from '../components/NotesList'
import TimerCounter from '../components/TimerCounter'
import { Suspense } from 'react'
import Spinner from '../components/Spinner'
import RefreshBtn from '../components/RefreshBtn'

export default function Home() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World 🚀</p>
        <Suspense fallback={<Spinner color="border-green-500" />}>
          <NotesList />
        </Suspense>
        <TimerCounter />
        <RefreshBtn />
      </div>
    </main>
  )
}
