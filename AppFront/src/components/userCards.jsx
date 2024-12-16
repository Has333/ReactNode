import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';;
import Card from '@mui/material/Card';

import { usersInfo } from '../hooks/usersInfo';
import { useQuery } from 'react-query';
import { useState } from 'react';
import * as React from 'react';

export default function UsersCardsComponent() {
    const [modalOpen, setModalOpen] = useState(false);
    const [cellIndex, getCellIndex] = useState(0);

    const { actions, states } = usersInfo();
    const { data, isError, isLoading, isFetching } = useQuery({
      queryKey: ['CARD_users'],
      queryFn: actions.getAllUsers,
    });

    function getIndexAndSwitchModal(index) {
      setModalOpen(!modalOpen);
      getCellIndex(index);
    };

    if (isError) {
      return (
        <section>
          <p>Something went wrong when trying to load users...</p>
        </section>
      );
    };
  
    if (!data || isLoading) {
      return (
        <section>
          <p>Loading users...</p>
        </section>
      );
    };

    if (modalOpen) {
      let user = data[cellIndex];
  
      return (
        <section>
          <h1>{`Full name: ${user.first_name} ${user.last_name}`}</h1>
          <h2>{`Email: ${user.email}`}</h2>
          <h2>{`Database Id: ${user._id}`}</h2>
          <button onClick={() => setModalOpen(!modalOpen)}>Go Back</button>
        </section>
      );
    };

    return (data).map((user) => (
        <Card sx={{ minWidth: 275, m: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {`${user.id}. ${user.first_name} ${user.last_name}`}
          </Typography>
          <button onClick={() => getIndexAndSwitchModal(user.id)}>
              View User Details
            </button>
        </CardContent>
        {isFetching && <small>User has been updated.</small>}
      </Card>
    ));
}
