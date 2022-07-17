import { useEffect } from 'react';
import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';

export default function Students() {
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/students');
      console.log(response.data);
    };

    getData();
  }, []);

  return (
    <Container>
      <h1>Listagem de alunos</h1>
    </Container>
  );
}
