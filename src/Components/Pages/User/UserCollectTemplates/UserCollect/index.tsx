import React, {useState, useEffect} from "react";
import TypeCreate from "../../../../Type/TypeCreate";
import axios, {AxiosError, AxiosResponse} from "axios";
import {CenterContent, PageContainer} from "../../../../../CSS/globalCSS";
import AllUserCollect from "./AllUserCollect";
import {userCollectAll} from "../axiosUserCollectConfig";
import {useParams} from "react-router-dom";
import {useRecoilState} from "recoil";
import {collectMainState} from "../../../../../Store/atoms";

interface RouteParams {
  id: any;
}

function UserCollect() {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [collectTitles, setCollectTitles] = useState<object | undefined>();
  const [createTitle, setCreateTitle] = useState<any>();
  const [createDisable, setCreateDisable] = useState<boolean>(true);
  const [collectMain, setcollectMain] = useRecoilState(collectMainState);
  let {id} = useParams<RouteParams>();

  const allCollectUser = () => {
    setIsLoad(true);
    axios(userCollectAll()).then(
      (res: AxiosResponse) => {
        setcollectMain(res.data);
      },
      (err: AxiosError) => {
        setError(err.message);
        console.log(err);
      }
    );
    setIsLoad(false);
  };

  const createTitleHandler = (title: string) => {
    setCreateTitle(title);
    createBtnHandler(title);
  };

  const createBtnHandler = (name: string) => {
    if (name === "") {
      setCreateDisable(true);
    } else {
      setCreateDisable(false);
    }
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setCreateTitle("");
  };

  useEffect(() => {
    allCollectUser();
  }, []);

  return (
    <CenterContent>
      <PageContainer>
        <TypeCreate
          createTitle={createTitle}
          createTitleHandler={createTitleHandler}
          onSubmitHandler={onSubmitHandler}
          createDisable={createDisable}
        />
        <AllUserCollect />
      </PageContainer>
    </CenterContent>
  );
}

export default UserCollect;
