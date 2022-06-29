import * as S from './styles';

interface TableProps {
  data: DataProps[];
  column: ColumnProps[];
}

interface ColumnProps {
  id: number;
  value: string;
  heading: string;
}

interface DataProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
}

export function Table({ data, column }: TableProps) {
  console.log(data);

  return (
    <S.TableContainer>
      <S.Table>
        <S.THead>
          <S.TRow>
            <S.THeadColumn>Checkbox</S.THeadColumn>
            {column.map((item: ColumnProps) => (
              <S.THeadColumn key={item.id}>{item.heading}</S.THeadColumn>
            ))}
          </S.TRow>
        </S.THead>

        <S.TBody>
          {data.map((item: DataProps) => (
            <S.TRow key={item.id}>
              <S.TBodyColumn>Checkbox {item.id}</S.TBodyColumn>

              {column.map((itemColumn: ColumnProps) => (
                <S.TBodyColumn key={itemColumn.value}>
                  {item[itemColumn.value as keyof DataProps]}
                </S.TBodyColumn>
              ))}
            </S.TRow>
          ))}
        </S.TBody>
      </S.Table>
    </S.TableContainer>
  );
}
