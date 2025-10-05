import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tv, TrendingUp } from 'lucide-react';

const channels = [
  "CNN", "Fox News", "ESPN", "Hulu", "Roku", "Samsung TV+",
  "Pluto TV", "Paramount+", "Peacock", "Tubi", "CBS Sports",
  "NFL Network", "NBA TV", "MLB Network", "Discovery+", "AMC+",
  "Comedy Central", "Bloomberg TV"
];

export const ChannelsShowcase = () => {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600">
          Premium Inventory
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Access 500+ Premium CTV Channels
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Reach highly engaged audiences across the most popular streaming platforms and connected TV channels
        </p>
      </div>

      {/* Channel Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {channels.map((channel, index) => (
          <Card
            key={index}
            className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all flex items-center justify-center h-24"
          >
            <div className="text-center">
              <Tv className="h-6 w-6 text-white/40 mx-auto mb-2" />
              <div className="text-sm font-semibold text-white/80">{channel}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Card className="p-6 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-white/10 text-center">
          <TrendingUp className="h-8 w-8 text-blue-400 mx-auto mb-3" />
          <div className="text-3xl font-bold mb-1">500+</div>
          <div className="text-white/60 text-sm">Premium Channels</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-purple-600/10 to-pink-600/10 border-white/10 text-center">
          <Tv className="h-8 w-8 text-purple-400 mx-auto mb-3" />
          <div className="text-3xl font-bold mb-1">100M+</div>
          <div className="text-white/60 text-sm">Monthly Reach</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-pink-600/10 to-orange-600/10 border-white/10 text-center">
          <TrendingUp className="h-8 w-8 text-pink-400 mx-auto mb-3" />
          <div className="text-3xl font-bold mb-1">95%+</div>
          <div className="text-white/60 text-sm">Viewability Rate</div>
        </Card>
      </div>

      <p className="text-center text-white/50 mt-8 text-sm">
        And hundreds more premium streaming services and connected TV platforms
      </p>
    </div>
  );
};
