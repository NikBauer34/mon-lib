import { LoginForm, TestLogin } from "@/widgets"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Вход в систему',
  description: 'Unilib - абис нового поколения'
}
const SignIn = () => {
  return (
    <>
      <LoginForm/>
    </>
  )
}
export default SignIn