// @mui
import { Container } from "@mui/material";
// layouts
import Layout from "src/layouts";
// components
import Page from "src/components/Page";
import useAuth from "src/hooks/useAuth";

AutoSignal.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function AutoSignal() {
  const { user } = useAuth();
  return (
    <Page title="자동신호수집">
      <Container>
        <div>자동 신호 수집</div>
        <p>{user?.displayName}</p>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ultricies, ligula in euismod lobortis, diam nisi porttitor metus,
          elementum venenatis ipsum nisi at ligula. Curabitur eros purus, mattis
          at pellentesque vitae, auctor a ex. Fusce a quam molestie turpis
          molestie aliquet non nec turpis. Sed vehicula mauris eget porttitor
          imperdiet. Nam mollis ligula eget mauris consequat, ut sodales justo
          euismod. Cras fermentum rhoncus metus, a semper quam ullamcorper et.
          Ut eu felis semper, venenatis risus ac, luctus turpis. Cras sit amet
          libero at eros faucibus sollicitudin. Donec arcu orci, varius quis
          nulla sed, rhoncus fermentum enim. Ut a hendrerit lorem. Mauris
          varius, nisl a aliquam ultricies, dui erat vehicula eros, vitae
          aliquet lacus lectus condimentum elit. Maecenas in varius massa, eget
          volutpat nunc. Vivamus lobortis placerat eros lacinia ultrices.
          Integer lorem nisi, condimentum vel finibus ut, viverra vitae est.
          Aenean non nibh tellus. Nullam justo nisl, fermentum at urna eget,
          facilisis luctus nulla. Sed sed justo justo. Suspendisse potenti.
          Vivamus congue feugiat pretium. Quisque auctor quam sed tortor
          faucibus, nec faucibus tortor interdum. Fusce malesuada massa quis ex
          dapibus, eu ullamcorper elit porta. Proin luctus lacus lobortis
          egestas molestie. Nam auctor cursus metus in pretium. Quisque ac metus
          non massa scelerisque suscipit ut ut magna. Nulla mattis lorem a purus
          convallis, id viverra orci rhoncus. Sed porta porta nibh, ac tempor
          nulla rutrum vel. Nunc luctus et diam non fermentum. Proin tincidunt
          et orci et euismod. Nam facilisis ultrices quam. Sed vel massa enim.
          Fusce justo nisi, consequat nec est ac, suscipit rutrum nisl. In
          hendrerit risus ut molestie blandit. Ut venenatis eget tellus non
          congue. Sed iaculis porta vulputate. Proin cursus lorem arcu, sit amet
          lobortis mauris laoreet id. Duis gravida iaculis elit ut tempor.
          Nullam sit amet ipsum vel dolor facilisis fringilla quis quis sem.
          Quisque nibh lacus, imperdiet eu diam non, efficitur vulputate justo.
          Nulla facilisi. Phasellus ullamcorper enim quis mauris tristique
          viverra. Integer posuere augue quis neque faucibus, quis dignissim
          urna consequat. Donec mattis fringilla nisl eget sollicitudin.
          Phasellus consectetur turpis nec sagittis fringilla. Nam libero metus,
          gravida convallis ultrices at, malesuada vel enim. Sed nisi dui,
          mollis ac massa in, pellentesque elementum libero. Suspendisse ac
          fringilla libero. Nunc tincidunt nunc nibh, sit amet condimentum velit
          sollicitudin et. Quisque non ipsum iaculis, porttitor libero nec,
          faucibus metus. Suspendisse vel nibh eu lacus posuere rhoncus ut eu
          nunc. Nulla ac dolor ultricies, facilisis massa in, posuere libero.
          Cras eget est diam. Morbi eget erat luctus, consectetur nulla ut,
          pharetra risus. Pellentesque ligula risus, gravida eu sapien a,
          eleifend convallis neque. Vestibulum rhoncus at nisi in ultrices.
          Suspendisse consequat urna et enim cursus, non rhoncus erat molestie.
          Maecenas sapien sem, rhoncus quis eros ut, mollis
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ultricies, ligula in euismod lobortis, diam nisi porttitor metus,
          elementum venenatis ipsum nisi at ligula. Curabitur eros purus, mattis
          at pellentesque vitae, auctor a ex. Fusce a quam molestie turpis
          molestie aliquet non nec turpis. Sed vehicula mauris eget porttitor
          imperdiet. Nam mollis ligula eget mauris consequat, ut sodales justo
          euismod. Cras fermentum rhoncus metus, a semper quam ullamcorper et.
          Ut eu felis semper, venenatis risus ac, luctus turpis. Cras sit amet
          libero at eros faucibus sollicitudin. Donec arcu orci, varius quis
          nulla sed, rhoncus fermentum enim. Ut a hendrerit lorem. Mauris
          varius, nisl a aliquam ultricies, dui erat vehicula eros, vitae
          aliquet lacus lectus condimentum elit. Maecenas in varius massa, eget
          volutpat nunc. Vivamus lobortis placerat eros lacinia ultrices.
          Integer lorem nisi, condimentum vel finibus ut, viverra vitae est.
          Aenean non nibh tellus. Nullam justo nisl, fermentum at urna eget,
          facilisis luctus nulla. Sed sed justo justo. Suspendisse potenti.
          Vivamus congue feugiat pretium. Quisque auctor quam sed tortor
          faucibus, nec faucibus tortor interdum. Fusce malesuada massa quis ex
          dapibus, eu ullamcorper elit porta. Proin luctus lacus lobortis
          egestas molestie. Nam auctor cursus metus in pretium. Quisque ac metus
          non massa scelerisque suscipit ut ut magna. Nulla mattis lorem a purus
          convallis, id viverra orci rhoncus. Sed porta porta nibh, ac tempor
          nulla rutrum vel. Nunc luctus et diam non fermentum. Proin tincidunt
          et orci et euismod. Nam facilisis ultrices quam. Sed vel massa enim.
          Fusce justo nisi, consequat nec est ac, suscipit rutrum nisl. In
          hendrerit risus ut molestie blandit. Ut venenatis eget tellus non
          congue. Sed iaculis porta vulputate. Proin cursus lorem arcu, sit amet
          lobortis mauris laoreet id. Duis gravida iaculis elit ut tempor.
          Nullam sit amet ipsum vel dolor facilisis fringilla quis quis sem.
          Quisque nibh lacus, imperdiet eu diam non, efficitur vulputate justo.
          Nulla facilisi. Phasellus ullamcorper enim quis mauris tristique
          viverra. Integer posuere augue quis neque faucibus, quis dignissim
          urna consequat. Donec mattis fringilla nisl eget sollicitudin.
          Phasellus consectetur turpis nec sagittis fringilla. Nam libero metus,
          gravida convallis ultrices at, malesuada vel enim. Sed nisi dui,
          mollis ac massa in, pellentesque elementum libero. Suspendisse ac
          fringilla libero. Nunc tincidunt nunc nibh, sit amet condimentum velit
          sollicitudin et. Quisque non ipsum iaculis, porttitor libero nec,
          faucibus metus. Suspendisse vel nibh eu lacus posuere rhoncus ut eu
          nunc. Nulla ac dolor ultricies, facilisis massa in, posuere libero.
          Cras eget est diam. Morbi eget erat luctus, consectetur nulla ut,
          pharetra risus. Pellentesque ligula risus, gravida eu sapien a,
          eleifend convallis neque. Vestibulum rhoncus at nisi in ultrices.
          Suspendisse consequat urna et enim cursus, non rhoncus erat molestie.
          Maecenas sapien sem, rhoncus quis eros ut, mollis
        </div>
      </Container>
    </Page>
  );
}
