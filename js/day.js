var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

dayjs().from(dayjs("1990-01-01"));
dayjs().from(dayjs("1990-01-01"), true);
dayjs().fromNow();

dayjs().to(dayjs("1990-01-01"));
dayjs().toNow();
