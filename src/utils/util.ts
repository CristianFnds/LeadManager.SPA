import { format } from "date-fns";

export const formatDate = (dateString: string) => {
    return format(new Date(dateString), "MMMM d @ h:mm a");
};

export const formatPrice = (price: number) => {
    return price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};