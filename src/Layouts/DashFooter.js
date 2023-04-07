import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation } from 'react-router-dom'

export function DashFooter() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const onGoHomeClicked = () => navigate('/dash')

    let goHomeButton = null
    if (pathname !== '/wellcome') {
        goHomeButton = (
            <button
                className="w-auto font-medium h-auto"
                title="Home"
                onClick={onGoHomeClicked}
            >
                <FontAwesomeIcon icon={faHouse}  /> Go Home
            </button>
        )
    }

  return(
    <div className="font-medium sticky bottom-0  text-white flex flex-nowrap justify-start px-4 py-4 gap-10">
      {goHomeButton}
      <p>Current User:</p>
    </div>
  )
}