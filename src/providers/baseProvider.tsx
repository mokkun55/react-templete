import type { ReactNode } from "react"

export const BaseProvider = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>
}
