import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Vicente o lindo</Text>
          <Text color="gray.300" fontSize="small">
            vivilindo@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Vicente Lindo"
        src="https://github.com/vicentexd.png"
      />
    </Flex>
  );
}
