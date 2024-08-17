import { FeedbacksType } from '../types/FeedbacksType';

export async function getFeedbacksData(): Promise<FeedbacksType[]> {
  try {
    const feedbacksData: FeedbacksType[] = [
      {
        id: 1,
        descricao: 'Excelente serviço, equipe muito atenciosa!',
        autor: 'João Silva',
        nota: 5,
        data: '2024-08-16',
      },
      {
        id: 2,
        descricao: 'A localização é ótima, mas o quarto poderia ser mais limpo.',
        autor: 'Maria Souza',
        nota: 3,
        data: '2024-08-15',
      },
      {
        id: 3,
        descricao: 'Gostei muito das comodidades, especialmente do spa.',
        autor: 'Carlos Pereira',
        nota: 4,
        data: '2024-08-14',
      },
      {
        id: 4,
        descricao: 'Infelizmente o atendimento deixou a desejar.',
        autor: 'Ana Santos',
        nota: 2,
        data: '2024-08-13',
      },
    ];

    return await Promise.resolve(feedbacksData);
  } catch (error) {
    throw new Error('Erro desconhecido');
  }
}
