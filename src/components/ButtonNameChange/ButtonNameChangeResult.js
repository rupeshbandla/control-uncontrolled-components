function ButtonNameChangeResult(params) {
  return <div>{params.total ? <h3>Result:{params.total}</h3> : null}</div>;
}

export default ButtonNameChangeResult;
