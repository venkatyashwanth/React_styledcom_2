import { StyledButton} from "./Components/Stylecomponents/Button.style";
import { AppContainer } from "./Components/Stylecomponents/Container.style" 
import { GlobalStyles } from "./Components/Stylecomponents/Global.style";
function App() {
  return (
    <>
    <GlobalStyles/>
    <AppContainer>
      <StyledButton buttonLabel="Click Here" backgroundColor="green"></StyledButton>
    </AppContainer>
    </>
  );
}

export default App;
