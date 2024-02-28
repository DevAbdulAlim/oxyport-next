import ReduxProvider from "@/redux/provider";
import Checkout from "./Checkout";
import OrderSummary from "./OrderSummary";
export default function Page() {
  return (
    <section className="py-8 px-3 bg-blue-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 flex flex-col justify-center items-center">
            <Checkout />
          </div>
          <div className=" lg:col-span-4 my-8">
            <ReduxProvider>
              <OrderSummary />
            </ReduxProvider>
          </div>
        </div>
      </div>
    </section>
  );
}
