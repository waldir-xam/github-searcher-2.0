import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchUser, getRepos } from "../../services";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { TypographyIconBio } from "../../components";

const User = () => {
  const { username } = useParams();

  const [userDetail, setUserDetail] = useState(null);

  const [repos, setRepos] = useState([]);

  const fetchUser = async () => {
    const data = await searchUser(username);
    setUserDetail(data);
    console.log("detail", data);
  };

  const fetchRepos = async () => {
    const data = await getRepos(username);
    setRepos(data);
    console.log("repos", data);
  };

  /*PARA "EXPORTAR " EL FETCH DE LAS FUNCIONES*/
  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <Container maxWidth="md" style={{
      backgroundColor: "#28336f", color: "#fff", borderRadius:"1em"
    }}>
      {userDetail && (
        <Box mt={10}>
          <Grid container spacing={3}>

            {/*DETALLES DE USUARIO */}

            <Grid item xs={12} md={4}>
              <Box mb={1} style={{
                textAlign: "center",
              }}>
                <img
                  style={{
                    borderRadius: "0%",
                  }}
                  width={200}
                  src={userDetail.avatar_url}
                  alt={userDetail.login}
                />
              </Box>
              {/* NAME */}
              <Typography mb={1} variant="h6" style={{
                textAlign: "center", fontWeight: "600"
              }}>
                {userDetail.name}
              </Typography>

              {/* USUARIO */}
              <Typography mb={3} variant="h6" fontWeight="600" color="#B2B2B2"
                style={{
                  textAlign: "center"
                }}>
                {userDetail.login}
              </Typography>

              {/* BIO */}
              <Typography mb={2} variant="body1">
                {userDetail.bio}
              </Typography>

              <CardContent style={{
                backgroundColor: "#000", color: "#fff", borderRadius: "1em"
              }}>
                {/* BOTON VER PERFIL */}
                <Button variant="contained" fullWidth href={`${userDetail.html_url}`}>
                  Ver Perfil en Github
                </Button>

                {/* ICONOS DETALLE BIO */}
                <TypographyIconBio
                  icon="people"
                  text={`${userDetail.followers} followers . ${userDetail.following} following`}
                />
                <TypographyIconBio icon="company" text={userDetail.company} />
                <TypographyIconBio icon="location" text={userDetail.location} />
                <TypographyIconBio icon="email" text={userDetail.email} />
                <TypographyIconBio icon="blog" text={userDetail.blog} />
                <TypographyIconBio
                  icon="social"
                  text={userDetail.twitter_username}
                />
              </CardContent>

            </Grid>

            {/* REPOSITORIOS */}

            <Grid item xs={12} md={8}>
              <Typography variant="h5" fontWeight="900">Repositorios://</Typography>
              <Box>
                {repos.length > 0 &&
                  repos.map((repo, index) => (
                    <Box key={index} mt={3}>
                      <Card>
                        {/* BOX DE CADA REPO */}
                        <CardContent style={{
                          backgroundColor: "#000", color: "#fff", borderRadius: "0em"
                        }}>
                          <Typography variant="h6" fontWeight="800">
                            {repo.name}
                          </Typography>
                          <Typography variant="body1" fontWeight="200"> Lenguaje://
                            {repo.language}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default User;
