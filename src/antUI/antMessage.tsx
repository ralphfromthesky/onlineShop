import { Button, message } from 'antd';
import { useEffect } from 'react';

const AntMessage = (props: any) => {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info(props.infoPass);
  };

  useEffect(() => {
    if(props.infoPass) {
        info()
    }

  },[props.infoPass])

  return (
    <>
      {contextHolder}
      {/* {props.infoPass ?  props.infoPass : ''} */}
      {/* <Button type="primary" onClick={info}>
        Display normal message
      </Button> */}
    </>
  );
};

export default AntMessage;