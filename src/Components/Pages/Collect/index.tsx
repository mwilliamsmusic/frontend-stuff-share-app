import React, {useState, useEffect} from "react";
import Type from "../../Type/Type";
import TypeCreate from "../../Type/TypeCreate";
import axios from "axios";
import {CenterContent, PageContainer} from "../../../CSS/globalCSS";
import {collectUser} from "../../../Utils/urlCollect";
import {collectAllUser} from "./axiosCollectConfig";
import {useParams} from "react-router-dom";

interface RouteParams {
  id: string;
}

function Collect() {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [list, setList] = useState<any>();
  const [createTitle, setCreateTitle] = useState<any>();
  const [createDisable, setCreateDisable] = useState<boolean>(true);

  let {id} = useParams<RouteParams>();

  const allCollectUser = () => {
    setIsLoad(true);
    axios(collectAllUser(id)).then(
      (res) => {
        setList(res.data);
      },
      (err) => {
        setError(err.message);
      }
    );
    setIsLoad(false);
  };

  const createTitleHandler = (title: string) => {
    setCreateTitle(title);
    btnCreateHandler(title);
  };

  const btnCreateHandler = (name: string) => {
    if (name === "") {
      setCreateDisable(true);
    } else {
      setCreateDisable(false);
    }
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    //  collectCreate();
    allCollectUser();
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
        <Type list={list} type="All Username Collections:" />
      </PageContainer>
    </CenterContent>
  );
}

export default Collect;
