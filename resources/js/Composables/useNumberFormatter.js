const numberFormatter = new Intl.NumberFormat();

export function useNumberFormatter(number) {
    if (!number) {
        return "0";
    }

    return numberFormatter.format(number);
}
