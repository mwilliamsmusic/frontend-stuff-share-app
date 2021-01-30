import React, {useState, useEffect} from "react";
import axios, {AxiosError, AxiosResponse} from "axios";
import AllUserCollect from "./AllUserCollect";
import {userCollectAll} from "../axiosUserCollectConfig";
import {useRecoilState} from "recoil";
import {userCollectAllState} from "../../../../../Store/userCollect/userAtoms";
import CreateCollect from "./CreateCollect";

function UserCollect() {
  const [collectTitle, setCollectTitle] = useState<string>();
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);
  const [collectAll, setcollectAll] = useRecoilState(userCollectAllState);

  function allCollectUser() {
    axios(userCollectAll()).then(
      (res: AxiosResponse) => {
        setcollectAll(res.data);
      },
      (err: AxiosError) => {}
    );
  }

  function titleHandler(title: string) {
    setCollectTitle(title);
    createBtnHandler(title);
  }

  function createBtnHandler(name: string) {
    if (name === "") {
      setSubmitDisabled(true);
    } else {
      setSubmitDisabled(false);
    }
  }

  function submitCollect(event: React.FormEvent) {
    event.preventDefault();
    setCollectTitle("");
  }

  useEffect(() => {
    allCollectUser();
  }, []);

  return (
    <div>
      <CreateCollect
        collectTitle={collectTitle}
        submitDisabled={submitDisabled}
        titleHandler={titleHandler}
        submitCollect={submitCollect}
      />
      <br />

      <AllUserCollect />
    </div>
  );
}

export default UserCollect;
