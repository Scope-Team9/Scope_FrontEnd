import React from "react";
import { Grid, Input, Text, Button, Image } from "../elements/Index";
import { Dialog } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { applyCreators } from "../redux/modules/applyProject";
import CloseIcon from "@mui/icons-material/Close";

const ApplyStatusModal = props => {
  const dispatch = useDispatch();
  const applyUsers = useSelector(state => state.apply.applyUsers);
  const { applyStatusModal, setApplyStatusModal, postId } = props;
  const modalClose = () => {
    setApplyStatusModal(false);
  };
  console.log(applyUsers);

  React.useEffect(() => {
    console.log(postId);
    if (applyStatusModal) {
      dispatch(applyCreators.applyUserAPI(postId));
    }
  }, [applyStatusModal]);

  const acceptOffer = acceptUser => {
    const acceptInfo = {
      userId: acceptUser,
      accept: true,
    };
    console.log(acceptInfo);
    // dispatch(applyCreators.acceptOfferAPI(postId, acceptInfo));
  };

  const cancelOffer = cancelUser => {
    const acceptInfo = {
      userId: cancelUser,
      accept: false,
    };
    console.log(acceptInfo);
    // dispatch(applyCreators.acceptOfferAPI(postId, acceptInfo));
  };

  return (
    <>
      <Dialog maxWidth={"sm"} scroll="paper" open={applyStatusModal}>
        <ModalWrap>
          <Grid height="10%" bg="#eee" position="relative">
            <Grid
              position="absolute"
              top="0px"
              right="10px"
              width="20px"
              padding="10px"
            >
              <CloseIcon fontSize="large" onClick={modalClose} />
            </Grid>
            <Grid alignItems="center">
              <Text margin="0 0 0 20px" bold>
                신청현황
              </Text>
            </Grid>
          </Grid>
          <Grid display="flex" height="85%" justifyContent="center">
            {applyUsers && (
              <Grid width="80%" margin="10px">
                {applyUsers.map((user, idx) => (
                  <Grid
                    border="1px solid #ddd"
                    margin="auto"
                    height="100px"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    padding="10px"
                    width="90%"
                    key={idx}
                    {...user}
                  >
                    <Grid margin="auto">
                      <Image size="80"></Image>
                    </Grid>
                    <Grid margin="auto" height="50px">
                      <Grid margin="auto" height="20px">
                        {applyUsers[idx].nickname}
                      </Grid>
                      <Grid margin="auto" height="20px">
                        {applyUsers[idx].userPropensityType}
                      </Grid>
                    </Grid>
                    <Grid margin="auto" height="50px">
                      <Button
                        isValue={applyUsers[idx].userId}
                        _onClick={e => {
                          console.log(e);
                          acceptOffer(e.target.value);
                        }}
                      >
                        수락
                      </Button>
                    </Grid>
                    <Grid margin="auto" height="50px">
                      <Button
                        _id="cancel"
                        backgroundColor="#fff"
                        color="#111"
                        isValue={applyUsers[idx].userId}
                        _onClick={e => {
                          console.log(e);
                          cancelOffer(e.target.value);
                        }}
                      >
                        취소
                      </Button>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
        </ModalWrap>
      </Dialog>
    </>
  );
};

const ModalWrap = styled.div`
  width: 550px;
  height: 500px;
`;

export default ApplyStatusModal;
