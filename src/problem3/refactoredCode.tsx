interface WalletBalance {
    currency: string;
    amount: number;
    blockchain: string; // Added blockchain property
  }
  
  interface Props extends BoxProps {}
  
  const priorities: Record<string, number> = {
    Osmosis: 100,
    Ethereum: 50,
    Arbitrum: 30,
    Zilliqa: 20,
    Neo: 20,
  };
  
  const WalletPage: React.FC<Props> = (props: Props) => {
    const { children, ...rest } = props;
    const balances = useWalletBalances(); // Assuming useWalletBalances is a custom hook
    const prices = usePrices(); // Assuming usePrices is a custom hook
  
    const getPriority = (blockchain: string): number => priorities[blockchain] || -99;
  
    const sortedBalances = useMemo(() => {
      return balances
        .filter((balance: WalletBalance) => balance.amount <= 0)
        .sort((lhs: WalletBalance, rhs: WalletBalance) => getPriority(rhs.blockchain) - getPriority(lhs.blockchain));
    }, [balances]);
  
    const rows = useMemo(() =>
      sortedBalances.map((balance: WalletBalance, index: number) => {
        const usdValue = prices[balance.currency] * balance.amount;
        const formattedAmount = balance.amount.toFixed();
        return (
          <WalletRow
            className={classes.row} // Assuming classes.row is defined
            key={index}
            amount={balance.amount}
            usdValue={usdValue}
            formattedAmount={formattedAmount}
          />
        );
      }),
      [sortedBalances, prices]
    );
  
    return <div {...rest}>{rows}</div>;
  };
  
  export default WalletPage;