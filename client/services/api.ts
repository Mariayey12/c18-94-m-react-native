import axios from "axios";
import { MedConnectProvider } from "./provider";
import { API_URL } from "@/constants";
import { Specialty } from "@/types/specialty";
import { Doctor } from "@/types/doctor";

export class WebApiService implements MedConnectProvider {
    getSpecialties = async (): Promise<Specialty[] | undefined> => {
        const res = await axios.get(`${API_URL}/specialties`);
        if (res?.request?.status === 200) {
            return res.data;
        } else {
            throw new Error("error!");
        }
    };

    getDoctorsByIdSpecialty = async (ids: string): Promise<Doctor[] | undefined> => {
        // const idsQueryString = ids?.join(",");
        // const res = await axios.get(`${API_URL}/doctor/list?specialtiesIds=${idsQueryString}`);
        // if (res?.request?.status === 200) {
        //     return res.data;
        // } else {
        //     throw new Error("error!");
        // }
        return;
    };
}