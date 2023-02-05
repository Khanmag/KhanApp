import axios from "axios";
import {IWord} from "../models/dictionary";

let instance = axios.create({
    baseURL: 'https://script.googleusercontent.com/macros/echo?user_content_key=S2d8mVvF4IKfiZJgCDzpG9NPq1uFAuXp6iHrT6RXVO1S1S15ZP-OqUruFDKfx04Liybwgol4C9H1IpAj0eHBglUNoLxUAhxJm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnK8JTV80DAM70lqzaoSvNgFiYcPCX2ORYzP6ofXJbGRX4x134KE8ru-t4t2PglDIm4qnr-FQMMknh5uUAZUmBPDTF55rsb8pUdz9Jw9Md8uu&lib=Mc_wHlyPaFfNQKzD9tI4gvJnPHQt2It8t',
})

export const getWordsGS = () => {
    return instance.get<IWord[]>('')
}

