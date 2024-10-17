import { useEffect } from "react"
import {useDispatch} from "react-redux"
import { getUsers } from "../api/ApiCalls"
import { setData } from "../store/UserSlice"
import { styles } from "../styles/styles"

export const Enroll = () => {
    const dispatch = useDispatch()
    useEffect( () => {
        const userData = async () => {
          const data = await getUsers()
        //   console.log(import.meta.env.VITE_API_URL)
        dispatch(setData(data))
        }
        userData()
    }, [])
    return (
      <div className={styles.mainSectionContiner}>
          <h1 className={styles.headerStyle}>
              Enroll Screen
          </h1>
      </div>
    )
  }