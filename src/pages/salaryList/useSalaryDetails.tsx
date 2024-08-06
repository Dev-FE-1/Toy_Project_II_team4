import { useQuery } from "@tanstack/react-query";
import { fetchSalaryDetails } from "./api/fetchSalaryInfo";

export default function useSalaryDetails(){
  return useQuery({
    queryKey:['salaryInfo'],
    queryFn:fetchSalaryDetails
  })
}