// client
interface InputData {
    inputData: string;
    label: string;
    type: string;
    values:string
  }
  
interface FormularioProps {
    inputs: InputData[];
}

export type { InputData, FormularioProps}