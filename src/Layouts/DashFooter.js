import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { faUserLarge } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation } from 'react-router-dom'

export function DashFooter() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const onGoHomeClicked = () => navigate('/dash')

    let goHomeButton = null
    if (pathname !== '/wellcome') {
        goHomeButton = (
            <button
                className="w-auto font-medium h-auto text-xl sticky bottom-0 hover:shadow-lg hover:shadow-white/70"
                title="Home"
                onClick={onGoHomeClicked}
            >
                <FontAwesomeIcon icon={faHouse}  /> Go Home
            </button>
        )
    }

  return(
    <div className="font-medium sticky bottom-0  text-white text-xl flex flex-nowrap justify-center gap-10">
      {goHomeButton}
    </div>
    
  )
}