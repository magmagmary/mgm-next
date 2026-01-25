import { Fragment } from "react/jsx-runtime";

const NewsDetailsLayout = ({children ,modal}: {children: React.ReactNode ,modal: React.ReactNode}) => {
  return (
    <Fragment>
      {children}
      {modal}
    </Fragment>
  )
}

export default NewsDetailsLayout;