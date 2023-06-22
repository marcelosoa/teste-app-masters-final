import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { ApiInterface } from '../interface/apiInterface';

export async function getGamesFromApi() {
  // API PARA REQUISIÇÃO
  const url = "http://games-test-api-81e9fb0d564a.herokuapp.com/api/data/";
  
  // REQUISIÇÃO & PARAMETRO SOLICITADO PARA TER RETORNO DA API
  try {
    const res = await axios.get(url, {
      headers: {
        'dev-email-address': 'marcelosoaresinc@gmail.com',
      },
      timeout: 5000,
    });
    const data: ApiInterface[] = res.data;
    return data;
    // Tratativa de Erros SOLICITADOS
  } catch (err) {
    const statusCode = (err as AxiosError<ApiInterface> | undefined)?.response?.status;
    if (axios.isCancel(err)) {
      toast.error(`O servidor demorou para responder, tente mais tarde`, )
    } else if (statusCode && statusCode >= 500 && statusCode <= 509) {
      toast.error(`O servidor falhou em responder, tente recarregar a página`, {
        duration: 4000,
        position: 'top-right',
        icon: '😵‍💫',
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
    } else {
      toast.error(`O servidor não conseguirá responder por agora, tente voltar novamente mais tarde`, {
        duration: 4000,
        position: 'top-right',
        icon: '😵‍💫',
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
    }
    
  }
}
