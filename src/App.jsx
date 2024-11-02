import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'

function App() {

  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>

}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobAtomsCount = useRecoilValue(jobsAtom);
  const notificationCount = useRecoilValue(notificationsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>

      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobAtomsCount}) </button>
      <button>Messaging ({messagingCount}) </button>
      <button>Notifications ({notificationCount}) </button>

      <button>Me ({totalNotificationCount}) </button>
    </>
  )
}

export default App
