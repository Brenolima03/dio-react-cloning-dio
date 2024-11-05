import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Container, Title, Column, TitleLogin, SubtitleLogin,
  ForgotPassword, SignUp, Row, Wrapper
} from "./styles";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("E-mail é obrigatório"),
  password:
    yup.string().min(3, "Mínimo 3 caracteres").required("Senha é obrigatória"),
}).required();

const Login = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `/users?email=${formData.email}&senha=${formData.password}`
      );

      if (data.length && data[0].id) {
        navigate("/feed");
        return;
      }

      alert("Usuário ou senha inválido");
    } catch (e) {
      alert("Houve um erro. Tente novamente.");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu login</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input 
                placeholder="E-mail" 
                leftIcon={<MdEmail />} 
                name="email" 
                control={control} 
                errorMessage={errors.email?.message}
              />
              <Input 
                type="password" 
                placeholder="Senha" 
                leftIcon={<MdLock />} 
                name="password" 
                control={control} 
                errorMessage={errors.password?.message}
              />
              <div style={{ marginTop: "30px" }}>
                <Button
                  title="Entrar"
                  variant="secondary"
                  type="submit"
                />
              </div>
            </form>
            <Row>
              <ForgotPassword href="#">Esqueci minha senha</ForgotPassword>
              <SignUp href="/signup">Criar Conta</SignUp>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );  
};
export { Login };
