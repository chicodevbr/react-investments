import Header from '../components/Header';
import Main from '../components/Main';
import Investment from '../components/Investment';
import { investData } from '../data/fundos';

export default function Investments() {
  const investments = investData.investments;
  const reports = investData.reports;
  return (
    <>
      <Header>React Investimentos</Header>

      <Main>
        {investments.map(inv => {
          const invReports = reports.filter(rep => rep.investmentId === inv.id);

          return (
            <Investment key={inv.id} descr={inv.description}>
              {invReports}
            </Investment>
          );
        })}
      </Main>
    </>
  );
}
