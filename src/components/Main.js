import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Image4 from "../asserts/image4.jpg"
import Image5 from "../asserts/image5.jpg"
import Image6 from "../asserts/image6.jpg"

const Main = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={3} >
        <Image src={Image6 } style={{height:"75vh"}} />
      </Grid.Column>
      <Grid.Column width={8}>
        <Image src={Image5} />
      </Grid.Column>
      <Grid.Column width={5}>
        <Image src={Image4} />
      </Grid.Column>
    </Grid.Row>

   
  </Grid>
)

export default Main