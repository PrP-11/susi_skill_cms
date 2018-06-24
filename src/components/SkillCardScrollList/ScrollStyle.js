const styles = {
  image: {
    position: 'relative',
    height: '64px',
    width: '64px',
    verticalAlign: 'top',
    borderRadius: '50%',
  },
  skillCard: {
    width: 260,
    height: 170,
    minHeight: '150px',
    margin: '10px',
    overflow: 'hidden',
    fontSize: '10px',
    textAlign: 'center',
    display: 'inline-block',
    background: '#f2f2f2',
    borderRadius: '5px',
    backgroundColor: '#f4f6f6',
    border: '1px solid #eaeded',
    padding: '5px',

    justifyContent: 'center',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '10px',
    background: '#fff',
    height: '100px',
    marginBottom: '6px',
  },
  name: {
    textAlign: 'left',
    fontSize: '15px',
    color: '#4285f4',
    marginBottom: '6px',
    border: '1px',
    height: '20px',
  },
  example: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '14px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '138px',
    padding: '10px',
    verticalAlign: 'middle',
    display: 'block',
    color: 'black',
    maxHeight: '80px',
  },
  rating: {
    positive: 'relative',
    float: 'left',
  },
  gridList: {
    margin: '10px',
    textAlign: 'center',
    overflowX: 'scroll',
    overflowY: 'hidden',
    whiteSpace: 'nowrap',
  },
  totalRating: {
    fontSize: '13px',
    paddingLeft: '5px',
    color: '#108ee9',
  },
  leftFab: {
    position: 'absolute',
    left: 260,
    marginTop: 75,
  },
  rightFab: {
    position: 'absolute',
    right: 0,
    marginTop: 75,
    marginRight: 10,
  },
};

export default styles;
