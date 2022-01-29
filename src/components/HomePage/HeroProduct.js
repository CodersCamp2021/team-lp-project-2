import { Flex, Image } from '@chakra-ui/react';

const HeroProduct = () => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Image
        height="xl"
        objectFit="contain"
        src="https://www.whatsappimages.in/wp-content/uploads/2020/05/Funny-Cat-Images-19.jpg"
      />
      <div>Arrows Placeholder</div>
    </Flex>
  );
};

export default HeroProduct;
