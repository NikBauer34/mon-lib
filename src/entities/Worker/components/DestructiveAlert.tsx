import { Alert, AlertCircle, AlertDescription, AlertTitle } from "@/shared"

const DestructiveAlert = ({title, description}: {title: string, description: string}) => {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}
export default DestructiveAlert