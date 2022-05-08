
          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: get_a_post.js
     output: -

  scenarios: (100.00%) 1 scenario, 1 max VUs, 10m30s max duration (incl. graceful stop):
           * default: 1 iterations for each of 1 VUs (maxDuration: 10m0s, gracefulStop: 30s)


running (00m00.0s), 0/1 VUs, 1 complete and 0 interrupted iterations
default ✓ [ 100% ] 1 VUs  00m00.0s/10m0s  1/1 iters, 1 per VU

     data_received..................: 780 B 31 kB/s
     data_sent......................: 422 B 17 kB/s
     http_req_blocked...............: min=10.01ms avg=10.01ms med=10.01ms p(99)=10.01ms p(99.9)=10.01ms max=10.01ms count=1
     http_req_connecting............: min=1.01ms  avg=1.01ms  med=1.01ms  p(99)=1.01ms  p(99.9)=1.01ms  max=1.01ms  count=1
     http_req_duration..............: min=9.56ms  avg=9.56ms  med=9.56ms  p(99)=9.56ms  p(99.9)=9.56ms  max=9.56ms  count=1
       { expected_response:true }...: min=9.56ms  avg=9.56ms  med=9.56ms  p(99)=9.56ms  p(99.9)=9.56ms  max=9.56ms  count=1
     http_req_failed................: 0.00% ✓ 0         ✗ 1
     http_req_receiving.............: min=0.55ms  avg=0.55ms  med=0.55ms  p(99)=0.55ms  p(99.9)=0.55ms  max=0.55ms  count=1
     http_req_sending...............: min=0.00ms  avg=0.00ms  med=0.00ms  p(99)=0.00ms  p(99.9)=0.00ms  max=0.00ms  count=1
     http_req_tls_handshaking.......: min=0.00ms  avg=0.00ms  med=0.00ms  p(99)=0.00ms  p(99.9)=0.00ms  max=0.00ms  count=1
     http_req_waiting...............: min=9.01ms  avg=9.01ms  med=9.01ms  p(99)=9.01ms  p(99.9)=9.01ms  max=9.01ms  count=1
     http_reqs......................: 1     39.607254/s
     iteration_duration.............: min=19.57ms avg=19.57ms med=19.57ms p(99)=19.57ms p(99.9)=19.57ms max=19.57ms count=1
     iterations.....................: 1     39.607254/s

