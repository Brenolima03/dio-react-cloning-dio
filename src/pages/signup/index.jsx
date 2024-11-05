import React from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Container, Title, Column, TitleSignUp, SubtitleSignUp, Login, Row, Wrapper
} from "./styles";
import axios from "axios";

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password:
    yup.string().min(3, "Mínimo 3 caracteres").required("Senha é obrigatória"),
}).required();

const SignUp = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData) => {
    try {
      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        senha: formData.password,
      };

      const response = await axios.post("http://localhost:8001/users", newUser);

      if (response.status === 201) {
        alert("Usuário cadastrado com sucesso!");
        navigate("/feed");
      }
    } catch (e) {
      alert("Houve um erro ao cadastrar o usuário. Tente novamente.");
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
            <TitleSignUp>Comece agora grátis</TitleSignUp>
            <SubtitleSignUp>Crie sua conta e make the change.</SubtitleSignUp>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input 
                placeholder="Nome" 
                leftIcon={<FaUser />} 
                name="name" 
                control={control} 
                errorMessage={errors.name?.message}
              />
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
                  title="Cadastrar"
                  variant="secondary"
                  type="submit"
                />
              </div>
            </form>
            <Row>
              <p>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </p>
            </Row>
            <Login href="/login">
              Ja tenho conta. <span>Fazer login</span>
            </Login>
          </Wrapper>
        </Column>
      </Container>
    </>
  );  
};
export { SignUp };
