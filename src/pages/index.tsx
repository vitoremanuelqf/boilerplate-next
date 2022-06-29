import { Table } from '~/components';

import { Mock } from '~/utils/mock';

export default function Home() {
  const column = [
    { id: 1, heading: 'Name', value: 'name' },
    { id: 2, heading: 'Email', value: 'email' },
  ];

  return (
    <div>
      <Table data={Mock} column={column} />
    </div>
  );
}
