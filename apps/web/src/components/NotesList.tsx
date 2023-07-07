import type { Database } from '../../database.types'
import { format } from 'date-fns'

type Note = Database['public']['Tables']['notes']['Row']

const fetchNotes = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const res = await fetch(`${process.env.url}/rest/v1/notes?select=*`, {
    headers: {
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      apikey: process.env.apikey as string
    },
    cache: 'no-store'
  })
  if (!res.ok) throw new Error('fetch failed')
  const notes: Note[] = await res.json()
  return notes
}

const NotesList = async () => {
  const notes = await fetchNotes()
  return (
    <div>
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">Notes</p>
      <ul className="m-3">
        {notes.map(note => (
          <li key={note.id}>
            <p>{note.title}</p>
            <p>
              <strong className="mr-3">Created at:</strong>
              {note && format(new Date(note.created_at), 'dd/MM/yyyy HH:mm:ss')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NotesList
