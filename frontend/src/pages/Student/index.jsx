import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmail, isInt, isFloat } from 'validator';
import { get } from 'lodash';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import * as actions from '../../store/modules/login/actions';

export default function Student() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;

    const getData = async () => {
      try {
        setIsLoading(true);

        // buscar dados do aluno no backend
        const { data } = await axios.get(`/students/${id}`);

        // preencher os dados do aluno no formulário
        setName(data.name);
        setLastname(data.lastname);
        setEmail(data.email);
        setAge(data.age);
        setWeight(data.weight);
        setHeight(data.height);
      } catch (error) {
        const errors = get(error, 'response.data.errors', []);
        const status = get(error, 'response.status', 0);

        if (status === 401) {
          toast.error('Você precisa fazer login!');
          dispatch(actions.doLoginFailure());
          navigate('/login');
        } else {
          errors.forEach((e) => toast.error(e));
          navigate('/');
        }
      } finally {
        setIsLoading(false);
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      formErrors = true;
      toast.error('Nome precisa ter entre 3 e 255 caracteres');
    }

    if (lastname < 3 || name.length > 255) {
      formErrors = true;
      toast.error('Sobrenome precisa ter entre 3 e 255 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (
      !isInt(age.toString()) ||
      parseInt(age.toString(), 10) <= 0 ||
      parseInt(age.toString(), 10) > 120
    ) {
      formErrors = true;
      toast.error('Idade inválida');
    }

    if (
      !isFloat(weight.toString()) ||
      parseFloat(weight.toString()) <= 0 ||
      parseFloat(weight.toString()) > 150
    ) {
      formErrors = true;
      toast.error('Peso inválido');
    }

    if (
      !isFloat(height.toString()) ||
      parseFloat(height.toString()) <= 0.3 ||
      parseFloat(height.toString()) > 2.4
    ) {
      formErrors = true;
      toast.error('Altura inválida');
    }

    if (formErrors)
      // eslint-disable-next-line no-useless-return
      return;

    try {
      setIsLoading(true);

      if (id) {
        // edição
        await axios.put(`/students/${id}`, {
          name,
          lastname,
          email,
          age,
          weight,
          height,
        });
        toast.success('Aluno(a) editado(a) com sucesso!');
      } else {
        // criação
        await axios.post('/students', {
          name,
          lastname,
          email,
          age,
          weight,
          height,
        });
        toast.success('Aluno(a) criado(a) com sucesso!');
      }
      navigate('/');
    } catch (error) {
      const errors = get(error, 'response.data.errors', []);
      const status = get(error, 'response.status', 0);

      if (status === 401) {
        toast.error('Você precisa fazer login!');
        dispatch(actions.doLoginFailure());
        navigate('/login');
      } else {
        errors.forEach((e) => toast.error(e));
        navigate('/');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Editar aluno' : 'Novo aluno'}</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Informe o nome"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={lastname}
          placeholder="Informe o sobrenome"
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Informe o email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          value={age}
          placeholder="Informe a idade"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="number"
          value={weight}
          placeholder="Informe o peso"
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          value={height}
          placeholder="Informe a altura (metros)"
          onChange={(e) => setHeight(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}
