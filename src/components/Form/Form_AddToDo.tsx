import {revalidatePath} from "next/cache"

type Props = {
  onclick: (ev: FormData) => void
}

export const FormAddToDo = ({onclick}: Props) => {
  return (
      <form action={onclick} method='POST' name='allData'>
        <ul>
          <li>
            <input className='border border-gray-300 rounded-lg py-4 px-4 text-base'
            type="text"
            placeholder='what to do'
            name='task'
            />
          </li>
          <li>
            <input
              className='border border-gray-300 rounded-lg py-4 px-4 text-base'
              type="text"
              placeholder='lastName'
              name='owner'
            />
          </li>
        </ul>
        <button
          className="rounded bg-blue-600 disabled:bg-gray-500 inline-flex px-4 py-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    )
}

