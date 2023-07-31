export interface CustomTableProps {
  headers: string[]
  rows: {
    key: string
    data: any[]
  }[]
}

export interface NumberInputComponentProps {
  name: string
  value: number
  onChange: (name: string, value: number) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  min: number
  defaultValue?: number
  precision?: number
  step: number
  dataTestId?: string
}

export interface ModalComponentProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  footer: React.ReactNode
}

export interface EmptyProps {
  message: string
}
