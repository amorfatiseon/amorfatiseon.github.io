import { styled } from '@stitches/react';

const ProfileWrapper = styled('img', {
  position: 'relative',
  marginBottom: '25px',
  borderRadius: '70%',
  objectFit: 'cover',
  height: '250px',
  width: '250px',
});

type ProfileProps = {
  picture: any;
};

function Profile({ picture }: ProfileProps) {
  return <ProfileWrapper src={picture} />;
}

export default Profile;
